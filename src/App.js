import React, {useState} from 'react';
import apiData from './data';
import Card from './Card';
import './App.css';
import Pagination from './Pagination';

const App = () => {
  //FOR PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage ] = useState(10);


  //Used useState to take care of selected category from the dropdown
  const [selectedCategory, setSelectedCategory] = useState('All');

  //using set data structure to find distinct categories
  const distinctCategories = Array.from(new Set(apiData.map((emoji) => emoji.category)));

  //assigning selected category
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //filtering emojis of only selected category
  const selectedEmojis = apiData.filter((emoji) => {
    return selectedCategory === 'All' || emoji.category === selectedCategory;
  });

  const postLastIndex = currentPage * postsPerPage;
  const postFirstIndex = postLastIndex - postsPerPage;

  //using slice method to cut the array by first and last index
  const currentPostsEmojis = selectedEmojis.slice(postFirstIndex, postLastIndex);

  return (
    <>
      <h1 className='heading_style'>Emoji Browser</h1>

      
      <div className='dropdown'>
        <h3>Filter Emojis</h3>
        <label className='dropdown_label'>
          Filter by Category:
          <select className='dropdown_select' value={selectedCategory} onChange={handleCategoryChange}>
            <option value="All">All</option>
            {distinctCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>

      {currentPostsEmojis.map((val, index) => {
        return (
          <Card
            name={val.name}
            category={val.category}
            group={val.group}
            htmlCode={val.htmlCode}
            unicode={val.unicode}
          />
        )
      })}
      <Pagination 
        totalPosts={selectedEmojis.length} 
        postsPerPage={postsPerPage} 
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

    </>
  )
}

export default App;