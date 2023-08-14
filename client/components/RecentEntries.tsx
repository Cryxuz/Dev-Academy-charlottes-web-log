import recentEntriesData from '../data/recent-entries'
import RecentEntries from './RecentEntry'

function RecentEntriesList() {
  return (
    <div>
      <h2>Recent entries</h2>
      {recentEntriesData.map((el) => (
        <RecentEntries key={el.id} {...el} />
      ))}
    </div>
  )
}
export default RecentEntriesList
