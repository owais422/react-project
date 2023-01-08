
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { Select } from 'antd';
import './forms.css' 
import CountrySelect from './formsfield.tsx/CountrySelect'
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};



const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};


const Forms = () => {
  return (
    <div className="form-title-div">
    <h1>Admission Form:</h1>
    <div className="form-content-div">
        <form>
         <label><b>Name</b></label> <input type="text" className="form-text"  /><br/><br/>
         <label> <b>fatherName</b></label> <input type="text" className="form-text"  /><br/><br/>
         <label><b>E-mail</b></label> <input type="email" className="form-text" /> <br/><br/>
         <label><b>Mobile Number</b></label> <input type="number" className="form-text"  /><br/><br/>
         <label><b>Date Of Birth</b>Date Of Birth</label>  <DatePicker onChange={onChange} className="form-text" /><br/><br/>
          
         <label><br>Select Course</br></label>    <Select className="form-text"
      defaultValue="Tecno kids admission                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       "
      style={{ width: 120 }}
      allowClear
      options={[
        {
          value: 'Tecno kids admission',
          label: 'Tecno kids admission',
        },
        {
          value: 'Mobile Repairing',
          label: 'Mobile Repairing'
        },{
          value: 'Web and Mobile Development',
          label: 'Web and Mobile Development'
        },{
          value: 'Graphic Designing',
          label: 'Graphic Designing'
        },
        
      ]}
      
    />
    <br/><br/>
      <CountrySelect/>    
        </form>
    </div>
      
        

  {/* <Space direction="vertical">
    
   
  </Space>
);

export default App; */}
    </div>
  )
}

export default Forms