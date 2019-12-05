'use strict'
const User = use('App/Models/User')
const { validate } = use('Validator')
const Hash = use('Hash')
const Encryption = use('Encryption')
class UserController {
    async register({request,response})
    {    
      let {
        f_name,
        m_name,
        l_name,
        email,
        password,
        mobile,
        age,
        gender,
        interests
    } = request.all();
        const rules = {
            email: 'unique:users',
            mobile: 'unique:users'
          }    
          
          const validation = await validate(request.all(), rules)
          if (validation.fails()) {
            return 0;
          }
    const user = await User.create({
            f_name,
            m_name,
            l_name,
            email,
            password,
            mobile,
            age,
            gender,
            interests
    }); 
    await user.save();
    return 1;
}
    async login({request,response}){
      const { email, password } = request.all()     
        const user = await User.query().where('email',email).first()
        if(user)
        { 
            //   const passwordVerified  = await Hash.verify(password,user.password )
            //if(passwordVerified)
            if(1)
            { 
            const token =  Encryption.encrypt(user)
         
             return(token)   
            }
        }      
        
       return 0
    }
    async getUserData({request,response}){
      let token = request.input('token');
      const decrypted = Encryption.decrypt(token);
      return response.send(decrypted); 
    }
    async updateProfile({request,response}){
      
        let {
          id,
          f_name,
          m_name,
          l_name,
          email,
          mobile,
          age,
          interests
      } = request.all();
      const user = await User.query().where('id',id).first();
      user.f_name = f_name;
      user.m_name = m_name;
      user.l_name = l_name;
      user.email = email;
      user.mobile = mobile ;
      user.age = age ;
      user.interests = interests ;
      await user.save();
      const token =  Encryption.encrypt(user)
      return response.send(token) ;
    } 
}

module.exports = UserController
