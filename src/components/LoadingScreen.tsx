import { motion } from 'framer-motion';
import styled from 'styled-components';

const LoadingContainer = styled(motion.div)`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0a0a0a;
  z-index: 50;
`;

const ContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(motion.h1)`
  font-size: 2.25rem;
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  color: white;
`;

const LoadingBar = styled(motion.div)`
  height: 0.125rem;
  background-color: white;
`;

const LoadingScreen: React.FC = () => {
  return (
    <LoadingContainer
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContentContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <Title
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            HIGOR NOGUEIRA
          </Title>
        </div>
        
        <LoadingBar
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </ContentContainer>
    </LoadingContainer>
  );
};

export default LoadingScreen; 