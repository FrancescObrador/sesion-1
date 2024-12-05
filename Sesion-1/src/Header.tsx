
interface HeaderProps {
  title: string
}

const Header = ({title}: HeaderProps) => {
    return (
        <div className="header">
          <div className="menuIcon">
            <div className="dashTop"></div>
            <div className="dashBottom"></div>
            <div className="circle"></div>
          </div>
          <h2>{title}</h2>
          <input
            type="text"
            className="searchInput"
            placeholder="Buscar ..."
          />
          <div className="fa fa-search searchIcon"></div>
        </div>
    )
}

export default Header;