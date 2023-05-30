import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

function App() {
  const [categories, setCategories] = useState(['Demon Slayer'])
  
  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory))return
    //categories.push(newCategory)
    setCategories([newCategory, ...categories])
    //setCategories(cat => [...cat, 'valorar'])
  }

  return (
    <>
      <h1>Gifs Finder</h1>

      <AddCategory 
        //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
        currentCtegories={categories}
        />

      {categories.map((category) => (
            <GifGrid key={category} category={category}/>
          ))
      }
    </>
  )
}

export default App
