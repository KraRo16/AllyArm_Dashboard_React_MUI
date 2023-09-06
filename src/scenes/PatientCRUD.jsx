import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
// import * as yup from "yup";
// import Header from "../scenes/Header";

const Form = () => {
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px" width="90%">
      {/* <Header title="CRUD USER" /> */}
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        // validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" alignItems="" pb="10px" mb="20px">
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ mb: "20px" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Age"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.age}
                name="age"
                error={!!touched.age && !!errors.age}
                helperText={touched.age && errors.age}
                sx={{ mb: "20px" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Side"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.side}
                name="side"
                error={!!touched.side && !!errors.side}
                helperText={touched.side && errors.side}
                sx={{ mb: "20px" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Target"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.target}
                name="target"
                error={!!touched.target && !!errors.target}
                helperText={touched.target && errors.target}
                sx={{ mb: "20px" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Start Therapy"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.startTherapy}
                name="startTherapy"
                error={!!touched.startTherapy && !!errors.startTherapy}
                helperText={touched.startTherapy && errors.startTherapy}
                sx={{ mb: "20px" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="N. Therapy"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nTherapy}
                name="nTherapy"
                error={!!touched.nTherapy && !!errors.nTherapy}
                helperText={touched.nTherapy && errors.nTherapy}
                sx={{ mb: "20px" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="End Therapy"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.endTherapy}
                name="endTherapy"
                error={!!touched.endTherapy && !!errors.endTherapy}
                helperText={touched.endTherapy && errors.endTherapy}
                sx={{ mb: "20px" }}
              />
            </Box>
            <Box display="flex" justifyContent="space-between" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add
              </Button>
              <Button type="submit" color="secondary" variant="contained">
                Edit
              </Button>
              <Button type="submit" color="secondary" variant="contained">
                Delete
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

// const checkoutSchema = yup.object().shape({
//   name: yup.string().required("Required"),
//   age: yup.number().required("Required"),
//   side: yup.string().required("Required"),
//   target: yup.string().required("Required"),
//   startTherapy: yup.date().required("Required"),
//   nTherapy: yup.number().required("Required"),
//   endTherapy: yup.date().required("Required"),
// });

const initialValues = {
  name: "",
  age: "",
  side: "",
  target: "",
  startTherapy: null,
  nTherapy: "",
  endTherapy: null,
};

export default Form;
