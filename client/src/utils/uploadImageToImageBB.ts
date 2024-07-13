type ImgBBResponseData = {
  data: {
    display_url: string;
  };
};

export const uploadFileToImgBB = async (file: File): Promise<string | null> => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(
      "https://api.imgbb.com/1/upload?key=32759f60f432e8e5c388e20a2da70600",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const data: ImgBBResponseData = await response.json();

    return data.data.display_url;
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
};
