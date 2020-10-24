import SubcategoryInterface from './SubcategoryInterface.js'
class Plastic extends SubcategoryInterface {
  constructor(props){
    super(props);
    this.subcategory ='Plastic';
    this.subcategoryImageURI = 'https://static.bangkokpost.com/media/content/20190930/c1_1761674.jpg';
  }
}

export default Plastic;