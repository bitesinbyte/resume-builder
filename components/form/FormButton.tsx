import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/react";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

const FormButton = ({ size, remove, add }: { size: any, remove: any, add: any }) => {

  return (
    <div className="flex-wrap-gap-2 mb-2">
      <Tooltip content="Add">
        <Button onClick={add}
          aria-label="Add"
          variant="light"
          isIconOnly
          startContent={<MdAddCircle className="text-xl" />}
        /></Tooltip>

      {
        size > 0 &&
        <Tooltip content="Remove">
          <Button onClick={remove}
            aria-label="Remove"
            variant="light"
            isIconOnly
            startContent={<MdRemoveCircle className="text-xl" />} />

        </Tooltip>
      }
    </div>
  )
}

export default FormButton;