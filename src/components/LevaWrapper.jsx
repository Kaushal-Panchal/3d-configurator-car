import { folder, useControls } from 'leva';
import React, { useEffect } from 'react';
import * as THREE from 'three';

export default function LevaWrapper({ materials, children, folderName = 'Materials' }) {
    let arrayOfControls = [];
    let folderStructureLeva = {};
    Object.keys(materials).map((materialName) => {
        const material = { ...materials[materialName] };
        const customMaterial = {};
        Object.keys(material).map((key) => {
            if (typeof material[key] === 'number' || typeof material[key] === 'boolean') {
                customMaterial[key] = material[key];
            } else if (typeof material[key] === 'object' && material[key]?.isColor) {
                // For Colors
                customMaterial[key] = `#${material[key].getHexString()}`;
            }
        });
        const levaControls = useControls(materialName, {
            ...customMaterial,
        });
        arrayOfControls.push({ name: materialName, levaControls });
    });

    useEffect(() => {
        arrayOfControls.map((control) => {
            const levaControls = control.levaControls;
            Object.keys(levaControls).map((levaKey) => {
                // For Colors
                if (typeof levaControls[levaKey] === 'string' && levaControls[levaKey]?.includes('#')) {
                    materials[control.name][levaKey] = new THREE.Color(levaControls[levaKey]);
                } else {
                    materials[control.name][levaKey] = levaControls[levaKey];
                }
            });
        });
    }, [arrayOfControls]);

    return children;
}
