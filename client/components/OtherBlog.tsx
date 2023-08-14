interface Props {
  id: number
  blogTitle: string
  link: string
}

function OtherBlog(props: Props) {
  return (
    <div>
      <h3>
        <a href={props.link}>{props.blogTitle}</a>
      </h3>
    </div>
  )
}

export default OtherBlog
