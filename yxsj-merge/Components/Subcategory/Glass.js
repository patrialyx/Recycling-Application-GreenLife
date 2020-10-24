import SubcategoryInterface from './SubcategoryInterface.js'
class Glass extends SubcategoryInterface {
  constructor(props){
    super(props);
    this.subcategory ='Glass';
    this.subcategoryImageURI = 'https://www.ikea.com/sg/en/images/products/dyrgrip-glass-clear-glass__0712419_PE728838_S5.JPG?f=xs';
  }
}

export default Glass;