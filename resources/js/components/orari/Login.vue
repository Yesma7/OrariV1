<template>
<div class="login-box container hold-transition login-page">
  <!-- /.login-logo -->
  <div class="card card-outline card-primary col col-sm-8 centrar">
    <div class="card-header text-center">
        <router-link exact-active-class="active" to="/" class="h1"><b>Ora</b>ri</router-link>
    </div>
    <div class="card-body">
      <p class="login-box-msg">Bienvenid@!</p>

      <form @submit.prevent="login">

        <div class="input-group mb-3">
          <input v-model="form.email" type="email" class="form-control" placeholder="Email">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>


        <div class="input-group mb-3">
          <input v-model="form.password" type="password" class="form-control" placeholder="Password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember">
              <label for="remember">
                Remember Me
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block">Iniciar Sesión</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <div class="social-auth-links text-center mt-2 mb-3">
        <a href="#" class="btn btn-block btn-primary">
          <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
        </a>
        <a href="#" class="btn btn-block btn-danger">
          <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
        </a>
      </div>
      <!-- /.social-auth-links -->

      <p class="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      <p class="mb-0">
        <router-link exact-active-class="active" to="/register" class="text-center">No tienes usuario? Regístrate aquí</router-link>
      </p>
    </div>
    <!-- /.card-body -->
  </div>
  <!-- /.card -->
</div>
</template>

<script>
    import axios from "axios";
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "http://localhost:8000/";


    export default {
        user: {},
        data: () => ({
            form: {
                email: "ydmarin72@misena.edu.co",
                password: "12345"
            }
        }),
        methods: {
            login() {
                axios.get('/sanctum/csrf-cookie').then(() => {
                    axios.post('/api/login', this.form).then(response => {
                        if(response.data.msg == 'NoRegistrado') {
                          this.$swal({
                            icon: 'error',
                            title: 'Oopss...',
                            text: 'No estás registrado'
                          });
                        }
                        console.log(response.data.msg);
                    });
                });
                console.log('Login', this.form);
            }
        }
    }
</script>