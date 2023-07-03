import { useState } from "react"

export const PostProducts = async (productData) => {
  try {
    const { data, error } = await supabase
      .from('products')
      .insert([productData])
      .select();
    
    if (!error) {
      console.log('Success adding product');
      onAddProduct(productData);
    } else {
      console.log('Failed adding product:', error);
    }
  } catch (error) {
    console.log('Error posting data:', error);
  }
}

export default function ModalForm() {
  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')

  const handleAdd = async () => {
    const productData = {
      title: productName,
      price: parseFloat(price),
      description: description,
      image: image,
      category: category,
    }
    await PostProducts(productData)
  }

  const handleClear = () => {
    setProductName('')
    setDescription('')
    setPrice('')
    setImage('')
    setCategory('')
  }

  return (
    <>
    <input type="checkbox" id="modalForm" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box flex flex-col gap-3">
        <div className="w-full flex gap-1.5 flex-col">
          <p className="font-semibold text-sm">Product Name</p>
          <input 
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            type="text" placeholder="Type here" 
            className="input input-bordered input-primary w-full text-base" />
        </div>
        <div className="w-full flex gap-1.5 flex-col">
          <p className="font-semibold text-sm">Description</p>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description product"
            className="textarea textarea-primary text-base max-h-[100px]" ></textarea>
        </div>
        <div className="w-full flex gap-1.5 flex-col">
          <p className="font-semibold text-sm">Price</p>
          <input 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text" placeholder="Type here" 
            className="input input-bordered input-primary w-full text-base" />
        </div>
        <div className="w-full flex gap-1.5 flex-col">
          <p className="font-semibold text-sm">Image URL</p>
          <input 
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text" placeholder="Type here" 
            className="input input-bordered input-primary w-full text-base" />
        </div>
        <div className="w-full flex gap-1.5 flex-col">
          <p className="font-semibold text-sm">Category</p>
          <input 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text" placeholder="Type here" 
            className="input input-bordered input-primary w-full text-base" />
        </div>

        <div className="w-full grid grid-cols-2">
          <div className="w-full mt-[1.5rem] flex gap-3 justify-start items-center">
            <button 
              className="btn btn-info">Add</button>
            <button 
              onClick={handleClear}
              className="btn btn-active btn-ghost">clear</button>
          </div>
          <div className="modal-action">
            <label htmlFor="modalForm" className="btn">cancel</label>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}