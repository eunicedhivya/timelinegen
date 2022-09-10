import "./PageTitle.css"
function PageTitle({pagename}) {
  return (
    <div className="page__title">
        <h2>{pagename}</h2>
    </div>
  )
}

export default PageTitle