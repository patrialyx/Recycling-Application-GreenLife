import SubcategoryInterface from './SubcategoryInterface.js'
class Metal extends SubcategoryInterface {
  constructor(props){
    super(props);
    this.subcategory ='Metal';
    this.subcategoryImageURI = 'https://cdn.mos.cms.futurecdn.net/ny4mavbUh8k6fpupcYdmg5.jpg';
  }
}

export default Metal;