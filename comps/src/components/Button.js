import classnames from 'classnames';

const finalClassName = classnames('px-1.5',{
  'bg-blue-500' : true,
  'text-white' : false,
});
function Button({
  children, 
  primary, 
  secondary, 
  success, 
  warning, 
  outline, 
  rounded,
  ...rest
}) {

  console.log(rest)
  const classes = classnames(rest.className, 'flex items-center px-3 py-1.5 border', {
    'border-blue-500 bg-blue-500 text-white': primary,
    'border-gray-500 bg-gray-500 text-white': secondary,
    'border-yellow-500 bg-yellow-500 text-white': warning,
    'border-red-500 bg-red-500 text-white': success,
    'rounded-full': rounded,
    'bg-white': outline
  });

  return (
  <button {...rest} className={classes}>{children}</button>
  );
}
Button.prototype = {
  checkVariationValue: ({primary, secondary, success, warning, danger}) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger)
    if (count > 1) {
      return new Error('Only one is allowed')
    }
  }
};
export default Button;
//prop types library validates props that get passed