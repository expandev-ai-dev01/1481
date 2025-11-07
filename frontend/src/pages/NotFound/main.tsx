import { useNavigate } from 'react-router-dom';
import { Card } from '@/core/components/Card';
import { Button } from '@/core/components/Button';

/**
 * @page NotFoundPage
 * @summary 404 error page
 * @domain core
 * @type error-page
 * @category error
 */
export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card variant="elevated" padding="lg" className="max-w-md w-full text-center">
        <h1 className="text-6xl font-serif font-bold text-oldMoney-gold mb-4">404</h1>
        <h2 className="text-2xl font-serif font-bold text-oldMoney-brown mb-4">
          Página Não Encontrada
        </h2>
        <p className="text-oldMoney-darkBrown mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Button variant="primary" size="lg" fullWidth onClick={() => navigate('/')}>
          Voltar para Início
        </Button>
      </Card>
    </div>
  );
};

export default NotFoundPage;
