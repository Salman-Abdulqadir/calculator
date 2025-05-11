import { cn } from "../lib/helpers";

const KeypadButton = ({ variant, ...buttonProps }) => {
  const commonStyles =
    "w-full rounded-lg text-lg transition duration-200 ease-in-out p-1 cursor-pointer text-[24px] md:text-[32px]";
  const variantStyles = {
    primary:
      "bg-key-primary text-primary-text shadow-[0_6px_0px_var(--key-primary-shadow)] hover:bg-key-primary-hover",
    secondary:
      "bg-key-secondary text-secondary-text shadow-[0_6px_0px_var(--key-secondary-shadow)] hover:bg-key-secondary-hover",
    accent:
      "bg-key-accent text-accent-text shadow-[0_6px_0px_var(--key-accent-shadow)] hover:bg-key-accent-hover",
  };
  const variantClass = variantStyles[variant] || variantStyles.primary;

  return (
    <button
      className={cn(commonStyles, variantClass, buttonProps.className)}
      {...buttonProps}
    />
  );
};

export default KeypadButton;
