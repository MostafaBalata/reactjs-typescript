import { toastr } from 'react-redux-toastr'

interface IErrorObject {
  title: string,
  message: string
}

interface IErrorMapper {
  [key: string]: IErrorObject
}

const errorCodeMapper: IErrorMapper = {
  "ERR_0001": {
    title: "Error Message",
    message: "Can't execute %s"
  },
  "ERR_0002": {
    title: "Global Error",
    message: "Global Error please check %s"
  }
}

export class NotificationCenter {
  public static error(code: string, message: string = "", moduleName: string = ""): void {

    const msg: string = `${errorCodeMapper[code].message.replace("%", message)}`;
    const title: string = `Module ${moduleName} : ${errorCodeMapper[code].title}`;

    toastr.error(title, `${msg}`);
  }

  public static info(message: string): void {
    toastr.info("Information", `${message}`);
  }

  public static success(message: string): void {
    toastr.success("Information", `${message}`);
  }
}