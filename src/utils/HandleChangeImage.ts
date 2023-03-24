import {ChangeEvent} from "react";
import {UploadFileService} from "../services/uploadFile.services";

export const HandleChangeImage = async (e: ChangeEvent<HTMLInputElement>, setImageUrl: (imageUrl: string) => void, folderName: string) => {
  const files = e.target.files
  if(!files?.length) return

  const formData = new FormData()
  formData.append('file', files[0])
  try {
    const res = await UploadFileService.uploadFile(formData, folderName)
    setImageUrl(res.data[0].url)
  } catch (error) {
    console.warn(error)
  }
};