import categories from "../../../categories";
import CategoryLargeScreen from "./CategoryLargeScreen";

interface lgDropdownMenuInterface {
  handler: React.MouseEventHandler<HTMLDivElement>,
  dropdownMenuState: boolean
}

const LargeDropdownMenu = ({ handler, dropdownMenuState }: lgDropdownMenuInterface) => {

	let styleElement = dropdownMenuState ? 'menu-item-content-active' : 'menu-item-content';
	return (
		<div
          className={`vw-100 position-fixed bg-white ${styleElement}`}
          style={{ zIndex: 100, height: `calc(100vh - 80px)` }}
          onMouseEnter={handler}
          onMouseLeave={handler}
        >
          <div className="d-flex pt-5 px-5 mt-3 justify-content-center">
            {categories.map((cat: any) => (
              <CategoryLargeScreen
                categoryName={cat.categoryName}
                srcImage={cat.categoryImage}
                subCategories={cat.subCategories}
              />
            ))}
          </div>
        </div>
	)
}

export default LargeDropdownMenu
