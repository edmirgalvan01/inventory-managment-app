import { TailSpin } from "react-loader-spinner";

export function LoaderSpinner() {
  return (
    <TailSpin
      visible={true}
      height="50"
      width="50"
      color="#44576D"
      ariaLabel="tail-spin-loading"
      radius="2"
    />
  );
}
