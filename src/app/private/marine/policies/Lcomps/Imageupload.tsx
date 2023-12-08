"use client";
import React, { useEffect } from "react";
import ImageUploading, { ImageType } from "react-images-uploading";

interface BlankImagePlaceholderProps {
  onImageUpload: () => void;
  isDragging: boolean;
  dragProps: Record<string, any>;
}

function BlankImagePlaceholder({
  onImageUpload,
  isDragging,
  dragProps,
}: BlankImagePlaceholderProps) {
  return (
    <div
      onClick={onImageUpload}
      {...dragProps}
      className={`max-w-sm mx-auto w-full  cursor-pointer ${
        isDragging && "opacity-50"
      }`}
    >
      <nav className="border-2 rounded-md overflow-hidden flex items-center justify-center h-full w-full  aspect-square  ">
        <nav
          className={`flex flex-col items-center gap-2 ${
            isDragging && " pointer-events-none"
          }`}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.0002 0C7.81683 0 0.333496 7.48333 0.333496 16.6667C0.333496 25.85 7.81683 33.3333 17.0002 33.3333C26.1835 33.3333 33.6668 25.85 33.6668 16.6667C33.6668 7.48333 26.1835 0 17.0002 0ZM23.6668 17.9167H18.2502V23.3333C18.2502 24.0167 17.6835 24.5833 17.0002 24.5833C16.3168 24.5833 15.7502 24.0167 15.7502 23.3333V17.9167H10.3335C9.65016 17.9167 9.0835 17.35 9.0835 16.6667C9.0835 15.9833 9.65016 15.4167 10.3335 15.4167H15.7502V10C15.7502 9.31667 16.3168 8.75 17.0002 8.75C17.6835 8.75 18.2502 9.31667 18.2502 10V15.4167H23.6668C24.3502 15.4167 24.9168 15.9833 24.9168 16.6667C24.9168 17.35 24.3502 17.9167 23.6668 17.9167Z"
              fill="black"
            />
          </svg>
          <span className="font-medium text-center">
            {isDragging ? "Drop  here" : "Click or drop files here"}
          </span>
        </nav>
      </nav>
    </div>
  );
}

interface ImageUploadProps {
  getImages?: (images: ImageType[]) => void;
  imgs?: ImageType[] | undefined;
  maxNumber?: number;
  maxFileSize?: number;
  onError?: (error: string) => void;
}

function ImageUpload({
  getImages,
  imgs,
  maxNumber = 5,
  maxFileSize = 10485760,
  onError,
}: ImageUploadProps) {
  const [images, setImages] = React.useState(imgs ?? []);
  const [error, setError] = React.useState("");

  const onChange = (
    imageList: ImageType[],
    addUpdateIndex: number[] | undefined
  ) => {
    setImages(imageList);
    getImages && getImages(imageList);
    setError("");
  };

  const mapErrorMessage: Record<string, string> = {
    maxFileSize: " One or more image Exceeded recommended size",
    maxNumber: ` Maximum Number of Images Exceeded`,
    acceptType: " One or more image format not supported",
  };

  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      maxFileSize={maxFileSize}
      onError={(err: any) =>
        onError && onError(mapErrorMessage[Object.keys(err)[0]])
      }
      dataURLKey="data_url"
      acceptType={["jpg", "png"]}
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        <div className="">
          {!images.length && (
            <BlankImagePlaceholder
              isDragging={isDragging}
              onImageUpload={onImageUpload}
              dragProps={dragProps}
            />
          )}
          <div className=" grid grid-cols-2 lg:grid-cols-3 gap-5">
            {imageList.map((image, index) => (
              <div
                key={index}
                className=" aspect-square w-full h-full object-cover relative"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.data_url}
                  alt=""
                  width=""
                  className=" w-full h-full aspect-square"
                />
                <div className="absolute top-1 right-1">
                  <button onClick={() => onImageRemove(index)}>
                    <svg
                      className=" text-red-700"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#ff0000"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.92 12.75H7.92C7.51 12.75 7.17 12.41 7.17 12C7.17 11.59 7.51 11.25 7.92 11.25H15.92C16.33 11.25 16.67 11.59 16.67 12C16.67 12.41 16.34 12.75 15.92 12.75Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            {Boolean(images.length) &&
              !(Number(images.length) === maxNumber) && (
                <BlankImagePlaceholder
                  isDragging={isDragging}
                  onImageUpload={onImageUpload}
                  dragProps={dragProps}
                />
              )}
          </div>
        </div>
      )}
    </ImageUploading>
  );
}

export default ImageUpload;
