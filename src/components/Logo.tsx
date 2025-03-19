import { motion } from 'framer-motion';
import styled from 'styled-components';

const LogoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.5rem;
  position: relative;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.75rem;
    transform: scale(0.95);
  }
`;

const NameContainer = styled(motion.div)`
  position: relative;
  display: inline-block;
  padding: 0 0.5rem;
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 35px;
    height: 1px;
    background: linear-gradient(90deg, rgba(212, 175, 55, 0), rgba(212, 175, 55, 0.3), rgba(212, 175, 55, 0));
    
    @media (max-width: 480px) {
      width: 25px;
    }
  }
  
  &::before {
    right: 100%;
  }
  
  &::after {
    left: 100%;
  }
`;

const FirstName = styled(motion.span)`
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.2rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  margin: 0;
  line-height: 1;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    letter-spacing: 0.06em;
  }
`;

const LastName = styled(motion.span)`
  font-family: 'Cinzel', serif;
  font-size: 2.8rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  margin: 0;
  line-height: 1.1;
  text-transform: uppercase;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(200, 200, 200, 0.8) 50%, rgba(212, 175, 55, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.2rem;
    letter-spacing: 0.04em;
  }
`;

const Separator = styled(motion.div)`
  position: relative;
  width: 150px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent);
  margin: 1rem 0;
  
  @media (max-width: 480px) {
    width: 120px;
    margin: 0.75rem 0;
  }

  &::before, &::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: rgba(212, 175, 55, 0.6);
    border-radius: 50%;
    top: -2px;
    
    @media (max-width: 480px) {
      width: 4px;
      height: 4px;
    }
  }

  &::before {
    left: calc(50% - 30px);
    
    @media (max-width: 480px) {
      left: calc(50% - 25px);
    }
  }

  &::after {
    right: calc(50% - 30px);
    
    @media (max-width: 480px) {
      right: calc(50% - 25px);
    }
  }
`;

const OrnamentalDiamond = styled(motion.div)`
  position: absolute;
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
  background-color: rgba(212, 175, 55, 0.5);
  bottom: -6px;
  left: calc(50% - 4px);
  
  @media (max-width: 480px) {
    width: 6px;
    height: 6px;
    bottom: -5px;
    left: calc(50% - 3px);
  }
`;

const Title = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  margin: 0.5rem 0 0 0;
  position: relative;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    letter-spacing: 0.2em;
  }
`;

interface LogoProps {
  firstName?: string;
  lastName?: string;
  title?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  firstName = "Higor", 
  lastName = "Nogueira", 
  title = "Visagista" 
}) => {
  return (
    <LogoContainer className="float-animation">
      <NameContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <FirstName
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          {firstName}
        </FirstName>{' '}
        <LastName
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {lastName}
        </LastName>
      </NameContainer>
      
      <Separator 
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: window.innerWidth <= 480 ? 120 : 150, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      
      <Title
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
      >
        {title}
        <OrnamentalDiamond 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
      </Title>
    </LogoContainer>
  );
};

export default Logo; 