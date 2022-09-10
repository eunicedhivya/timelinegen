
import "./AddNewPg.css";
import PageTitle from "../../component/pagetitle/PageTitle";
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from "yup";
import ErrorTxt from "../../component/errortext/ErrorTxt";

// import { useFormik } from "formik";

const initialValues = {
  title: '',
  description: '',
  // author: '',
  timelines: [
    {
      year: '',
      desc: '',
    },
  ]
}

const validationSchema = Yup.object({
  // title: Yup.string().required(" Please enter the title"),
  // description: Yup.string().required(" Please enter the description"),
  // author: Yup.string(),
  // timelines: Yup.array().of(
  //   Yup.object().shape({
  //     year: Yup.string().required(" Pleas enter the timeline year"),
  //     desc: Yup.string().required(" Pleas enter the timeline text")
  //   })
  // )
})

const onSubmitForm = (values) => {
  console.log(values);
  console.log(JSON.stringify(values));
}

function AddNewPg() {
  return (
    <div className="page">
        <PageTitle pagename="Add New Timeline" />
        <div className="formContainer">
          <Formik 
          initialValues={initialValues} 
          validationSchema={validationSchema}
          onSubmit={onSubmitForm}
          >
          <Form>

              <div className="formHead">
                <div className="formControl">
                  <label forhtml="title">Title</label>
                  <Field type="text" name="title" />
                  <ErrorMessage name="title" component={ErrorTxt} />
                </div>

                <div className="formControl">
                  <label forhtml="description">Description</label>
                  <Field type="text" name="description" />
                  <ErrorMessage name="description" component={ErrorTxt}  />
                </div>

                {/* <div className="formControl">
                  <label forhtml="author">Author</label>
                  <Field type="text" name="author" />
                  <ErrorMessage name="author" component={ErrorTxt}  />
                </div> */}
              </div>

              <div className="formControlSection">
                <h3>Timeline of Events</h3>
                <FieldArray name="timelines">
                  {fieldArrayProps => {
                    const {push, remove, form} = fieldArrayProps;
                    const { values } = form;
                    const { timelines } = values;
                    return (
                      <div className="block">
                        { timelines.map((timeline, index)=>{
                          return (
                            <div  className="formControlGroup" key={index}>
                            <div className="formControl">
                              <label forhtml={`timelines[${index}].year`}>Year</label>
                              <Field type="text" name={`timelines[${index}].year`} />
                              <ErrorMessage name={`timelines[${index}].year`} component={ErrorTxt}  />
                            </div>
                            <div className="formControl">
                              <label forhtml={`timelines[${index}].desc`}>Description</label>
                              <Field type="text" name={`timelines[${index}].desc`} />
                              <ErrorMessage name={`timelines[${index}].desc`} component={ErrorTxt}  />
                            </div>
                              <button className="removeBtn" onClick={() => remove(index)}>X</button>
                              
                            </div>
                          )
                        })}
                        <button className="addmore" onClick={() => push('')}>Add Event</button>
                      </div>
                    )
                    
                  }}
                  
                </FieldArray>
              </div>

              <div className="formControl">
                <button className="btn" type="submit">Submit</button>
              </div>
            </Form>
          </Formik>
        </div>
    </div>
  )
}

export default AddNewPg