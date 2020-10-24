import SubcategoryInterface from './SubcategoryInterface.js'
class Paper extends SubcategoryInterface {
  constructor(props){
    super(props);
    this.subcategory ='Paper';
    this.subcategoryImageURI = 'https://www.bu.edu/sustainability/files/2015/10/paper-.jpg';
  }
}

export default Paper;