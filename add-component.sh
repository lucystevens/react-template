#!/bin/bash
# add a new component using template

# If incorrect args exit
if [[ $# -lt 2 ]]; then
	echo "Invalid args. Usage: add-component.sh <page|common> <ComponentName>"
    exit 1
fi

# change page to pages
type=$1
name=$2
if [[ $type == "page" ]]; then
    type="pages"
fi

# validate type
if [[ $type != "pages" && $type != "common" ]]; then
    echo "Unrecognised type $type. Allowed types are page or common."
    exit 1
fi

rootDir="src/components/$type/$name"
mkdir "$rootDir"
cp "templates/TemplateComponent.tsx" "$rootDir/$name.tsx"
sed -i "s/TemplateComponent/$name/g" "$rootDir/$name.tsx"
cp "templates/TemplateComponent.scss" "$rootDir/$name.scss"
sed -i "s/TemplateComponent/$name/g" "$rootDir/$name.scss"
echo -e "\nexport { $name } from \"./$name/$name\";" >> "src/components/$type/index.ts"