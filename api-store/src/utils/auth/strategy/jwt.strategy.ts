import { Strategy, ExtractJwt } from 'passport-jwt';
import { config } from '../../../config/config';
import { OptionsJwt } from '../../../types/optiosStrategys';

const options:OptionsJwt = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt_keygen
};

const JwtStrategy = new Strategy(options, (payload, done) =>{
    return done(null, payload);
});

export { JwtStrategy };