interface Props {
  id: number
  name: string
  link: string
}

function RecentEntries(props: Props) {
  return (
    <>
      <p>
        <a href={props.link}>{props.name}</a>
      </p>
    </>
  )
}

export default RecentEntries
