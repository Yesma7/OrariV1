<template>
    <div class="register-box">
  <div class="card card-outline card-primary col col-sm-8 centrar">
    <div class="card-header text-center">
        <router-link exact-active-class="active" to="/" class="h1"><b>Ora</b>ri</router-link>
    </div>
    <div class="card-body">
      <p class="login-box-msg">Registrate</p>

      <form @submit.prevent="register">

        <div class="input-group mb-3">
          <input v-model="form.name_first" type="text" class="form-control" placeholder="Nombres">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-user"></span>
            </div>
          </div>
        </div>


        <div class="input-group mb-3">
          <input v-model="form.name_last" type="text" class="form-control" placeholder="Apellidos">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-user"></span>
            </div>
          </div>
        </div>


        <div class="input-group mb-3">
          <input v-model="form.position" type="text" class="form-control" placeholder="Cargo">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-user"></span>
            </div>
          </div>
        </div>


        <div class="input-group mb-3">
          <input v-model="form.email" type="email" class="form-control" placeholder="Email">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="input-group mb-3">
          <input id="txtPassword" v-model="form.password" type="password" class="form-control" placeholder="Contraseña">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div id="strengthMessage"></div>
        </div>


        <div class="form-group">
        <div class="input-group mb-3">
          <input id="txtPasswordConfirm" v-model="form.password_confirmation" type="password" class="form-control" placeholder="Confirma la contraseña">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div id="equalMessage"></div>
        </div>


        <div class="row">
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block">Registrarse</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <div class="social-auth-links text-center">
        <a href="#" class="btn btn-block btn-primary">
          <i class="fab fa-facebook mr-2"></i>
          Sign up using Facebook
        </a>
        <a href="#" class="btn btn-block btn-danger">
          <i class="fab fa-google-plus mr-2"></i>
          Sign up using Google+
        </a>
      </div>

      <router-link exact-active-class="active" to="/login" class="text-center">Ya estás registrado? Inicia sesión aquí</router-link>
    </div>
    <!-- /.form-box -->
  </div><!-- /.card -->
</div>
</template>

<script>
    import axios from 'axios';
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "http://localhost:8000/";


    export default {
        user: {},
        data: () => ({
            form: {
                name_first: "",
                name_last: "",
                position: "",
                email: "",
                password: "",
                password_confirmation: ""
            }
        }),
        methods: {
            register() {
                axios.get('/sanctum/csrf-cookie').then(() => {
                    axios.post('/api/register', this.form).then(response => {
                        console.log(response.data.msg);
                    });
                });
                console.log('Register', this.form);
            }
        }
    }


        //Validador Contraseñas
    $(document).ready(function () {
        //Contraseña segura
        $('#txtPassword').keyup(function () {
            $('#strengthMessage').html(checkStrength($('#txtPassword').val()))
        })
        function checkStrength(password) {
            var strength = 0
            if (password.length < 6) {
                $('#strengthMessage').removeClass()
                $('#strengthMessage').addClass('Short')
                return 'Muy cortita, un poco más'
            }
            if (password.length > 7) strength += 1
            // If password contains both lower and uppercase characters, increase strength value.
            if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
            // If it has numbers and characters, increase strength value.
            if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
            // If it has one special character, increase strength value.
            if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
            // If it has two special characters, increase strength value.
            if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
            // Calculated strength value, we can return messages
            // If value is less than 2
            if (strength < 2) {
                $('#strengthMessage').removeClass()
                $('#strengthMessage').addClass('Weak')
                return 'Algo debil, más por favor'
            } else if (strength == 2) {
                $('#strengthMessage').removeClass()
                $('#strengthMessage').addClass('Good')
                return 'Está bién, puede ser mejor'
            } else {
                $('#strengthMessage').removeClass()
                $('#strengthMessage').addClass('Strong')
                return 'Perfecta!'
            }
        }

            var cambioDePass = function() {
            var cont = $('#txtPassword').val();
            var cont2 = $('#txtPasswordConfirm').val();
            if (cont == cont2) {
                $('#equalMessage').removeClass();
                $('#equalMessage').addClass('equal');
                $('#equalMessage').html('Genial, son iguales');
            } else {
                $('#equalMessage').removeClass();
                $('#equalMessage').addClass('noEqual');
                $('#equalMessage').html('Ops, no son iguales');
            }
            }

            //$("#txtPassword").on('keyup', cambioDePass);
            $("#txtPasswordConfirm").on('keyup', cambioDePass);


    });

</script>