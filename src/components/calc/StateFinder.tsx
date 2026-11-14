/**
 * State finder: for any of the 50 states and DC, whether a statute or rule requires certification of
 * central service technicians, since when, the time allowed after hire, the credentials accepted, the
 * continuing education and the facilities covered. Everything is read from params-2026.json.
 */
import { useState } from 'react';
import SelectField from '../ui/SelectField';
import P from '../../data/params-2026.json';
import { ALL_STATES, stateByName } from '../../lib/engine/rules';
import { dateL } from '../../lib/format-l';

const BILLS = P.bills as Array<{ state: string; what: string; status: string }>;
interface Props { state?: string; idPrefix?: string; secondary?: boolean }
const OTHER_STATES = (P.otherStates as string[]).filter((s) => s !== 'District of Columbia').length;
/** Page of a state with a text, where its deadline calculator is. */
const statePath = (id: string) => `/en/${id === 'new-jersey' ? 'new-jersey-sterile-processing-certification' : `${id}-central-service-technician-law`}/`;
export default function StateFinder({ state: s0 = 'Pennsylvania', idPrefix = 'sf', secondary = false }: Props) {
  const first = ALL_STATES.includes(s0) ? s0 : 'Pennsylvania';
  const [name, setName] = useState(first);
  const [touched, setTouched] = useState(false);
  const st = stateByName(name);
  const bill = BILLS.find((b) => b.state === name);
  const future = st?.status === 'enacted-future';
  const pick = (n: string) => { setName(n); setTouched(true); };
  return (
    <div data-chrome className="not-prose space-y-4">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_290px]">
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()} {...(secondary ? { 'data-simulateur-secondaire': '' } : {})}>
          <SelectField id={`${idPrefix}-state`} label="State or district where you work" value={name} onChange={pick} options={ALL_STATES.map((n) => ({ value: n, label: n }))} />
          {!touched && <p data-exemple className="rounded-md border border-amber-300 bg-amber-50 px-2 py-1 text-xs leading-snug text-amber-900"><strong className="font-semibold">Example: {first}</strong> — pick the state where you work to see your own answer.</p>}
        </form>
        <div {...(secondary ? {} : { 'data-resultat': '' })} aria-live="polite" className="h-fit rounded-lg border-t-4 border-accent-700 bg-navy-50 p-4">
          <p className="text-sm font-medium text-navy-700">{name}: certification required by the state?</p>
          <p className="mt-1 text-4xl font-bold text-navy-900">{st ? (future ? 'From 2028' : 'Yes') : 'No'}</p>
          <p className="text-sm text-navy-700">{st ? (future ? `Law in force since ${dateL(st.effective)}, for hires from ${dateL(st.bitesFrom ?? st.effective)}` : `In force since ${dateL(st.effective)}${st.effectiveNote ? ' (last amendment)' : ''}`) : 'No statute or health rule found'}</p>
          {st && <p className="tabular-nums mt-3 text-2xl font-semibold text-navy-900">{st.graceMonths} months<span className="block text-sm font-normal text-navy-700">after the date of hire to hold the credential</span></p>}
          <a href={st ? statePath(st.id) : '/en/states-without-a-certification-law/'} className="mt-3 inline-block text-sm font-medium text-accent-700 underline">{st ? `Your exact date in ${st.name} →` : 'What employers ask instead →'}</a>
        </div>
      </div>
      <table className="w-full text-sm"><tbody className="divide-y divide-navy-200">
        {st ? <>
          <tr><td className="py-2 pr-3 text-navy-600">Certificate accepted</td><td className="py-2 text-navy-900">{st.credentials}{/CRCST|CSPDT/.test(st.credentials) && <span className="block text-xs text-navy-600">Two national certificates: the CRCST is given by HSPA, an association; the CSPDT by the CBSPD, a board</span>}</td></tr>
          <tr><td className="py-2 pr-3 text-navy-600">Who is exempt</td><td className="py-2 text-navy-900">{st.grandfather ?? 'No exemption for staff already in post is written in the rule'}</td></tr>
          <tr><td className="py-2 pr-3 text-navy-600">Facilities covered</td><td className="py-2 text-navy-900">{st.facilities}</td></tr>
          <tr><td className="py-2 pr-3 text-navy-600">Continuing education</td><td className="py-2 text-navy-900">{st.ceHours ? `${st.ceHours} hours a year, for ${st.ceWho.charAt(0).toLowerCase()}${st.ceWho.slice(1)}` : st.ceWho}{st.ceHours ? <span className="block text-xs text-navy-600">A separate rule from the certificate’s own renewal; the same courses can often count for both</span> : null}</td></tr>
          <tr><td className="py-2 pr-3 text-navy-600">Official text</td><td className="py-2 text-xs text-navy-600">{st.citation} ({st.instrument.toLowerCase()})</td></tr>
        </> : <>
          <tr><td className="py-2 pr-3 text-navy-600">State law or rule</td><td className="py-2 text-navy-900">None found requiring certification of central service technicians</td></tr>
          {bill && <tr><td className="py-2 pr-3 text-navy-600">Bill or effort</td><td className="py-2 text-navy-900">{bill.what}: {bill.status.charAt(0).toLowerCase()}{bill.status.slice(1)}</td></tr>}
          <tr><td className="py-2 pr-3 text-navy-600">What applies instead</td><td className="py-2 text-navy-900">Your employer’s job requirements; many hospitals ask for the CRCST or the CSPDT anyway</td></tr>
        </>}
      </tbody></table>
      <p className="text-xs text-navy-700">Statutes and rules read on {dateL(P.retrieved_at)}. The other {OTHER_STATES} states and DC have no such law, according to the list of state laws kept by HSPA (the association that gives the CRCST) and our own search.</p>
    </div>
  );
}
