import {ChangeEvent} from "react";

export const uploadFile =
  async (e: ChangeEvent<HTMLInputElement>, mutate?: any) => {
    e.preventDefault();
    const files = e.target.files;
    if (!files?.length) return;
    const formData = new FormData();
    formData.append('file', files[0]);
    if (mutate) await mutate(formData);
  }