import { NextPage as _NextPage } from "next";

declare module "next" {
  export interface NextPage extends _NextPage {
    getLayout?: (page: React.ReactNode) => React.ReactNode;
  }
}
