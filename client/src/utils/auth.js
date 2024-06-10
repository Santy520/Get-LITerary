// class AuthService {
//   async getProfile() {
//     const { default: decode } = await import('jwt-decode');
//     return decode(this.getToken());
//   }

//   async loggedIn() {
//     const token = this.getToken();
//     console.log(token, 'this is the auth ');
//     const isExpired = await this.isTokenExpired(token);
//     return token && !isExpired ? true : false;
//   }

//   async isTokenExpired(token) {
//     const { default: decode } = await import('jwt-decode');
//     const decoded = decode(token);
//     if (decoded.exp < Date.now() / 1000) {
//       localStorage.removeItem('id_token');
//       return true;
//     }
//     return false;
//   }

//   getToken() {
//     return localStorage.getItem('id_token');
//   }

//   login(idToken) {
//     localStorage.setItem('id_token', idToken);
//     window.location.assign('/WelcomeScreen');
//   }

//   logout() {
//     localStorage.removeItem('id_token');
//     window.location.reload();
//   }
// }

// export default new AuthService();
class AuthService {
  async getProfile() {
    try {
      const { default: decode } = await import('jwt-decode');
      return decode(this.getToken());
    } catch (error) {
      console.error('Invalid token:', error.message);
      return null;
    }
  }

  async loggedIn() {
    const token = this.getToken();
    if (!token) return false; // Handle cases with no token
    console.log(token, 'this is the auth ');
    const isExpired = await this.isTokenExpired(token);
    return token && !isExpired ? true : false;
  }

  async isTokenExpired(token) {
    try {
      const { default: decode } = await import('jwt-decode');
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem('id_token');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error decoding token:', error.message);
      localStorage.removeItem('id_token');
      return true;
    }
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/WelcomeScreen');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/'); // Redirect to sign-in page after logout
  }
}

export default new AuthService();
