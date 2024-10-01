import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/react";
import React, { } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"

const FormCP = ({ formClose, setFormClose }: {
  formClose: boolean,
  setFormClose: any
}) => {
  return (
    <Tooltip content={formClose ? "Form Open" : "Form Close"}>
      <Button
        aria-label="Form Open/Close"
        className="exclude-print fixed bottom-5 left-10 font-bold rounded-full shadow-lg border-2 border-white"
        onClick={() => setFormClose(!formClose)}
        isIconOnly
        startContent={formClose ? <BsFillArrowRightCircleFill className="w-10 h-10" title="Form Open" /> : <BsFillArrowLeftCircleFill className="w-10 h-10" title="Form Close" />}
      />
    </Tooltip>
  )
}

export default FormCP;