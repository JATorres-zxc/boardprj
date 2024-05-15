"use client";

import { useOrganizationList } from '@clerk/nextjs';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

export const OrgControl = () => {
    const params = useParams();
    const { setActive } = useOrganizationList();

    useEffect(() => {
        // console.log('useEffect called');
        // console.log('params.organizationId:', params.organizationId);
        // console.log('setActive:', setActive);

        if (!setActive) {
            console.error('setActive is not defined');
            return;
        }

        if (!params.organizationId) {
            console.error('organizationId is not defined');
            return;
        }

        setActive({
            organization: params.organizationId as string
        });
    }, [setActive, params.organizationId]);

    return null;
};
