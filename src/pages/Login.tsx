import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Login = () => {
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      user: Yup.string()
        .email("El usuario debe ser un mail valido")
        .required("Es requerido"),
      password: Yup.string()
        .length(8, "El password debe tener 8 caracteres")
        .required("Es requerido"),
    }),
  });

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <Card sx={{ minWidth: 275, height: 300 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              Sax May Admin
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              usuario
            </Typography>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                id="user"
                name="user"
                type="text"
                onChange={handleChange}
                value={values.user}
              />
              {touched.user && errors.user && <span className="error">{errors.user}</span>}
            </div>

            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              contraseña
            </Typography>
            <div style={{ display: "flex", flexDirection: "column" }}>
             <input
              id="password"
              name="password"
              type="text"
              onChange={handleChange}
              value={values.password}
            />
            {touched.password && errors.password && (
              <span className="error">{errors.password}</span>
            )} 
            </div>
            
          </CardContent>
          <CardActions style={{ justifyContent: "center" }}>
            <button type="submit">ingresar</button>
          </CardActions>
        </Card>
      </form>
    </>
  );
};
