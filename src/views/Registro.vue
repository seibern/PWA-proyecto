<template>
  <div>
    <base-header
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      style="
        min-height: 600px;
        background-image: url(img/theme/profile-cover.jpg);
        background-size: cover;
        background-position: center top;
      "
    >
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-10 col-md-10">
            <h1 class="display-1 text-white">Registrar usuario</h1>
            <p>Texto: {{fullName}}</p>
          </div>
        </div>
      </div>
    </base-header>

    <form>
        <base-input type="text" v-model="fullName"/>
    </form>

    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-lg-12 order-1">
          <card shadow type="secondary">
            <template v-slot:header>
              <div class="bg-white border-0">
                <div class="row align-items-center">
                  <div class="col-8">
                    <h3 class="mb-0">Registro</h3>
                  </div>
                </div>
              </div>
            </template>

            <form>
              <h6 class="heading-small text-muted mb-4">Información del usuario</h6>
              <div class="pl-lg-4">
                <div class="row">
                  <div class="col-lg-6">
                    <input v-model="fullName"/>
                    <base-input
                      type="text"
                      v-model="fullName"
                      label="Nombre completo"
                      placeholder="Nombre completo"
                      
                    />
                  </div>
                  <div class="col-lg-6">
                    <base-input
                      label="Correo electrónico"
                      placeholder="jesse@example.com"
                      v-model="email"
                    />
                  </div>
                  <div class="col-lg-6">
                    <base-input
                      type ="password"
                      label="Contraseña"
                      placeholder="1234"
                      v-model="password"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <base-input
                      alternative=""
                      label="Cumpleaños"
                      placeholder="Cumpleaños"
                      input-classes="form-control-alternative"
                      v-model="birthday"
                    />
                  </div>
                  <div class="col-lg-6">
                    <base-input
                      alternative=""
                      label="Cedula"
                      placeholder="12345"
                      input-classes="form-control-alternative"
                      v-model="cedula"
                    />
                  </div>
                  <div class="col-lg-6">
                    <base-input
                      alternative=""
                      label="Celular"
                      placeholder="12345"
                      input-classes="form-control-alternative"
                      v-model="phone"
                    />
                  </div>
                  <div class="col-lg-6">
                    <base-input
                      alternative=""
                      label="Cargo"
                      placeholder="cargo"
                      input-classes="form-control-alternative"
                      v-model="cargo"
                    />
                  </div>
                  <div class="text-center">
              <base-button type="primary" v-on:click="register" class="my-4">Registrar</base-button>
            </div>
                </div>
              </div>
              <hr class="my-4" />
              
            </form>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "user-profile",
  data() {
    return {
        username: "",
        email: "",
        password: "aaaaaa",
        fullName: "",
        birthday: "",
        address: "",
        cedula: "",
        phone: "",
        cargo: ""
    };
  },
  methods:{
      register(){
        let json = {
          "name" : this.fullName,  
          "email" : this.email,
          "password": this.password
        };
        console.log(this.password);
        axios.post('http://localhost:4000/users', json);
    }
  },
};
</script>
<style></style>
