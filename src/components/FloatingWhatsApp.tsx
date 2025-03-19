import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

const FloatingButton = styled(motion.div)`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 50;
  
  @media (max-width: 480px) {
    bottom: 1.25rem;
    right: 1.25rem;
  }
`;

const WhatsAppLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  background-color: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  box-shadow: 
    0 6px 16px rgba(0, 0, 0, 0.25),
    0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  backdrop-filter: blur(5px);
  
  @media (max-width: 480px) {
    width: 3rem;
    height: 3rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(135deg, rgba(37, 211, 102, 0), rgba(37, 211, 102, 0.3));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    background-color: rgba(30, 30, 30, 0.9);
    transform: translateY(-4px);
    box-shadow: 
      0 10px 25px rgba(0, 0, 0, 0.3),
      0 3px 6px rgba(0, 0, 0, 0.2);
      
    &::before {
      opacity: 1;
    }
  }
  
  svg {
    color: rgba(37, 211, 102, 0.8);
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.3));
    transition: all 0.3s ease;
    
    @media (max-width: 480px) {
      transform: scale(0.9);
    }
  }
  
  &:hover svg {
    color: rgba(37, 211, 102, 1);
    transform: scale(1.1);
    
    @media (max-width: 480px) {
      transform: scale(1);
    }
  }
`;

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ 
  phoneNumber, 
  message = "Olá, gostaria de agendar uma consultoria"
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <FloatingButton
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppLink
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={20} />
      </WhatsAppLink>
    </FloatingButton>
  );
};

export default FloatingWhatsApp; 