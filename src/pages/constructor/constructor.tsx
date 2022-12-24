import { BurgerIngredient } from '../../components/ingredient';

function ConstructorPage({ ingredients }: any) {
    return (
    <main>
        {ingredients.map((ingredient: any) => {
            return <BurgerIngredient key={ingredient._id} ingredient={ingredient} />
        })}
    </main>
  );
}

export { ConstructorPage };
