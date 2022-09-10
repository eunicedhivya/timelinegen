function MainMenuLink({classNameTxt, linkTxt, url}) {
  return (
    <a href={url}><span className={classNameTxt}></span> {linkTxt}</a>
  )
}

export default MainMenuLink