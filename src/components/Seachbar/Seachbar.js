import { VscSearch } from 'react-icons/vsc';

//import { toast } from 'react-hot-toast'
import { Form, Button, Input, Conteiner } from './Seachbar.styled';

const Searchbar = () =>{
    //const [query, setQuery] = useState ('');

//   handleChange = ({ target: { value } }) => {
//     this.setState({ value });
//   };

//   handleSumit = (e) => {
//     e.preventDefault();
//     this.props.onSearch(this.state.value);
//     this.setState({ value: '' });
//   };

      return (
      <Conteiner>
        <Form >         
          <Button type='submit'>
          <VscSearch style={{ width: 25, height: 25 }} />
          </Button>
          <Input
              type="search"
              name="name"
              //id="name"
              //value={value}
              //onChange={this.handleChange}
              placeholder="Search..."
            />
          </Form>
      </Conteiner>
    );
  }

  export default Searchbar;