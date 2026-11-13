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
export default function StateFinder({ state: s0 = 'Pennsylvania', idPrefix = 'sf', secondary = false }: Props) {
  const [name, setName] = useState(ALL_STATES.includes(s0) ? s0 : 'Pennsylvania');
  const st = stateByName(name);
  const bill = BILLS.find((b) => b.state === name);
  const future = st?.status === 'enacted-future';
  return (
    <div data-chrome className="not-prose grid gap-5 lg:grid-cols-[minmax(0,1fr)_290px]">
      <form className="space-y-3" onSubmit={(e) => e.preventDefault()} {...(secondary ? { 'data-simulateur-secondaire': '' } : {})}>
        <SelectField id={`${idPrefix}-state`} label="State or district where you work" value={name} onChange={setName} options={ALL_STATES.map((n) => ({ value: n, label: n }))} />
        <table className="w-full text-sm"><tbody className="divide-y divide-navy-200">
          {st ? <>
            <tr><td className="py-2 pr-3 text-navy-600">Text</td><td className="py-2 text-navy-900">{st.citation} ({st.instrument.toLowerCase()})</td></tr>
            <tr><td className="py-2 pr-3 text-navy-600">Credentials accepted</td><td className="py-2 text-navy-900">{st.credentials}</td></tr>
            <tr><td className="py-2 pr-3 text-navy-600">Who is exempt</td><td className="py-2 text-navy-900">{st.grandfather ?? 'No exemption for staff already in post is written in the rule'}</td></tr>
            <tr><td className="py-2 pr-3 text-navy-600">Facilities covered</td><td className="py-2 text-navy-900">{st.facilities}</td></tr>
            <tr><td className="py-2 pr-3 text-navy-600">Continuing education</td><td className="py-2 text-navy-900">{st.ceHours ? `${st.ceHours} hours a year: ${st.ceWho.charAt(0).toLowerCase()}${st.ceWho.slice(1)}` : st.ceWho}</td></tr>
          </> : <>
            <tr><td className="py-2 pr-3 text-navy-600">State law or rule</td><td className="py-2 text-navy-900">None found requiring certification of central service technicians</td></tr>
            {bill && <tr><td className="py-2 pr-3 text-navy-600">Bill or effort</td><td className="py-2 text-navy-900">{bill.what}: {bill.status.charAt(0).toLowerCase()}{bill.status.slice(1)}</td></tr>}
            <tr><td className="py-2 pr-3 text-navy-600">What applies instead</td><td className="py-2 text-navy-900">Your employer’s job requirements; many hospitals ask for the CRCST or the CSPDT anyway</td></tr>
          </>}
        </tbody></table>
      </form>
      <div {...(secondary ? {} : { 'data-resultat': '' })} aria-live="polite" className="h-fit rounded-lg border-t-4 border-accent-700 bg-navy-50 p-4 lg:sticky lg:top-20">
        <p className="text-sm font-medium text-navy-700">{name}: certification required by the state?</p>
        <p className="mt-1 text-4xl font-bold text-navy-900">{st ? (future ? 'From 2028' : 'Yes') : 'No'}</p>
        <p className="text-sm text-navy-700">{st ? (future ? `Law in force since ${dateL(st.effective)}, for hires from ${dateL(st.bitesFrom ?? st.effective)}` : `In force since ${dateL(st.effective)}${st.effectiveNote ? ' (last amendment)' : ''}`) : 'No statute or health rule found'}</p>
        {st && <p className="tabular-nums mt-3 text-2xl font-semibold text-navy-900">{st.graceMonths} months<span className="block text-sm font-normal text-navy-700">after the date of hire to hold the credential</span></p>}
        <p className="mt-3 text-xs text-navy-700">Statutes and rules read on {dateL(P.retrieved_at)}. The {ALL_STATES.length - 7} other states and DC: HSPA list and our own search.</p>
      </div>
    </div>
  );
}
