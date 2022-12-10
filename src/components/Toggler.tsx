import { Switch } from "@headlessui/react";
import { FC } from "react";

interface IToggleProps {
  /**
   * Is the toggle disabled?
   */
  disabled?: boolean;
  /**
   * Is the toggle switch active
   */
  enabled: boolean;
  /**
   * Function triggerd when toggle is changed
   */
  onChange: () => void;
}

const Toggle: FC<IToggleProps> = ({ disabled = false, enabled, onChange }) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    onChange();
  };

  return (
    <Switch.Group as='div' className='flex items-center justify-between '>
      <Switch checked={enabled} onChange={handleClick} disabled={disabled}>
        <span className='sr-only'>Toggler setting</span>
        <span
          aria-hidden='true'
          className='pointer-events-none absolute h-full w-full rounded-md bg-white'
        />
        <span
          aria-hidden='true'
          className={disabled ? "cursor-not-allowed bg-opacity-60" : ""}
        />
        <span aria-hidden='true'>1</span>
      </Switch>
    </Switch.Group>
  );
};

export default Toggle;
export { Toggle };
