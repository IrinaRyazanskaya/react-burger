import { BurgerIngredients } from '../../components/burger-ingredients';

function ConstructorPage({ ingredients }: any) {
  return (
    <main>
      <BurgerIngredients ingredients={ingredients} />
    </main>
  );
}

export { ConstructorPage };
