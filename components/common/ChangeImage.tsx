import { ChangeEvent, HTMLAttributes, useRef, useState } from 'react'

const ChangeImage = ({ img, name }: { img: string; name: string }) => {
  const [deleteImg, setDeleteImg] = useState(false)
  const [imgDelete, setImgDelete] = useState(false)
  const [imageUploaded, setImageUploaded] = useState<string>()
  const imgRef = useRef({} as HTMLDivElement)

  const showBtn = () => {
    setDeleteImg(!deleteImg)
  }

  const actionchangeImage = () => {
    // delete img db
    imgRef.current?.removeChild(imgRef.current.children[0])
    setImgDelete(true)
  }

  const onChangeImage = async (e: ChangeEvent<any>) => {
    try {
      const img = e.target.files[0]

      const formData = new FormData()
      formData.append('file', img)
      formData.append('upload_preset', 'dphhkpiyp')

      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dphhkpiyp/image/upload',
        { method: 'POST', body: formData },
      )
      const file = await res.json()

      setImageUploaded(file.secure_url)

      console.log(file)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div ref={imgRef} className="flex justify-center my-3">
      <div
        onMouseEnter={showBtn}
        onMouseLeave={showBtn}
        className="flex flex-col relative items-center"
      >
        <img
          src={img}
          alt={name}
          width="180"
          height="140"
          className=" rounded-2xl"
        />
        {deleteImg && (
          <button
            onClick={actionchangeImage}
            className="text-white text-center bg-red-400 rounded-t-lg absolute w-full"
          >
            cambiar imagen
          </button>
        )}
      </div>
      {imgDelete && (
        <div>
          {imageUploaded ? (
            <div className="flex flex-col relative items-center">
              <img
                src={imageUploaded}
                alt={name}
                width="180"
                height="140"
                className=" rounded-2xl"
              />
            </div>
          ) : (
            <div className="flex justify-center">
              <input className="w-9/12" type="file" onChange={onChangeImage} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ChangeImage
