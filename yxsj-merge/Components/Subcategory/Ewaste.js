import SubcategoryInterface from './SubcategoryInterface.js'
class Ewaste extends SubcategoryInterface {
  constructor(props){
    super(props);
    this.subcategory ='E-waste';
    this.subcategoryImageURI = 'https://inhabitat.com/wp-content/blogs.dir/1/files/2018/08/e-waste-889x667.jpg';
  }
}

export default Ewaste;