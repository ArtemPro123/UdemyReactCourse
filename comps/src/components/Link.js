import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link ({to, children, className, activeClassName}){
//children are the text are objects within the tags

  const {navigate, currentPath} = useNavigation();

  const classes = classNames('text-blue-500', className, currentPath === to && activeClassName);//active class will only be used when current path is equal to to path

  const handleClick = (event) => {
    if(event.metaKey || event.ctrlKey){
      return;
    }
    event.preventDefault();//to stop triggering page refresh
    navigate(to);
  };

  return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;