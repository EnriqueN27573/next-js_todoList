// Buffer Line
"use client";
import { useEffect, useRef } from "react";
import CustomButton from "../CustomButton/CustomButton";
import { default as style } from "./CustomForm.style";

export type InputInfo = {
  param: string;
  required: boolean;
  defaultValue?: string;
};

type CustomFormProps = {
  title: string;
  inputInfo: InputInfo[];
  submitButtonText: string;
  handleFormData: (
    formData: Record<string, string>
  ) => Promise<{ error?: string }>;
};

function CustomForm(props: CustomFormProps) {
  let formData = useRef<Record<string, string>>({}).current;
  const formInputs = useRef<Record<string, () => void>>({});

  const updateFormData = (event: any) => {
    const key = event.target.name;
    formData[key] = event.target.value;
  };

  const submitFormData = async () => {
    for (let info of props.inputInfo) {
      if (!info.required) {
        continue;
      }

      if (formData[info.param].trim() === "") {
        window.alert(`Missing ${info.param}`);
        return;
      }
    }

    const { error } = await props.handleFormData(formData);
    if (error) {
      window.alert(error);
      return;
    }

    for (let key in formInputs.current) {
      formInputs.current[key]();
    }
  };

  const inputIDName = (
    componentName: string,
    index: number,
    prefix: string = "Input"
  ) => {
    return `${props.title}Form${prefix}${componentName}${index}`;
  };

  useEffect(() => {
    props.inputInfo.map((info) => (formData[info.param] = ""));
  }, []);

  return (
    <div id="customFormContainer" className={style.customFormContainer}>
      <div id="customForm" className={style.customForm}>
        <div id="formTitle" className={style.formTitle}>
          {props.title}
        </div>
        <form
          onKeyDown={(event: any) => {
            if (event.key === "Enter") event.preventDefault();
          }}
        >
          {props.inputInfo.map((inputInfo: InputInfo, index: number) => {
            return (
              <div
                key={index}
                id={inputIDName("Container", index)}
                className={style.inputContainer}
              >
                <div
                  id={inputIDName("Title", index)}
                  className={style.inputTitle}
                >
                  {inputInfo.param} :
                </div>
                <input
                  ref={(input) => {
                    formInputs.current[inputInfo.param] = () => {
                      if (input) input.value = "";
                    };
                  }}
                  id={inputIDName("", index)}
                  className={style.input}
                  name={inputInfo.param}
                  type="text"
                  onChange={updateFormData}
                  placeholder={`Input ${inputInfo.param} Here ~`}
                  defaultValue={inputInfo.defaultValue || ""}
                />
              </div>
            );
          })}
        </form>
        <div
          id={inputIDName("Container", 0, "Button")}
          className={style.formButtonContainer}
        >
          <CustomButton
            buttonText={props.submitButtonText || "Submit"}
            buttonFunction={submitFormData}
          />
        </div>
      </div>
    </div>
  );
}

export default CustomForm;
