import { AxiosError, isAxiosError } from "axios";
import { deleteProfile, getProfile } from "../../../services";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Alert } from "../../../components/Alert";
import { Avatar } from "../../../components/Avatar";
import { Loader } from "../../../components/Loader";
import { ProfileType } from "../../../types";
import styles from "./index.module.css";
import { useTranslations } from "../../../hooks/useI18n";
import { Button } from "../../../components";

export const DeleteProfile = () => {
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const t = useTranslations();
  const params = useParams<{ id: string }>();
  const id = Number(params.id);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      try {
        const { data } = await getProfile(id);
        setProfile(data);
      } catch (err) {
        if (isAxiosError<{ message: string }>(err)) {
          const message =
            err.response?.status === 404
              ? "OPS Não achei esse profile"
              : "OPS, tente novamente";

          setError(message);
        }
      }

      setIsLoading(false);
    }
    getData();
  }, [id]);

  const handleDelete = async () => {
    if (!profile) {
      return;
    }

    setIsLoading(true);

    try {
      await deleteProfile(id);
      navigate("/profile");
      return;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      setError(error.response?.data?.message || "Something went wrong");
    }
    setIsLoading(false);
  };

  if (error) {
    return (
      <Alert>
        {error}
        <Button onClick={() => navigate("/profile")}>
          Voltar para o perfil
        </Button>
      </Alert>
    );
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Avatar image={profile?.avatar.image} disabled />

          <h4>{profile?.name}</h4>
        </div>

        <h1 className={styles.title}>{t["profile.delete"]}?</h1>

        <p className={styles.p}>{t["profile.delete.message"]}</p>
        <div className={styles.actions}>
          <Button onClick={handleDelete}>{t["profile.delete"]}</Button>
          <Button variant="filled" onClick={() => navigate("/profile")}>
            {t["profile.cancel"]}
          </Button>
        </div>
      </div>

      {isLoading && <Loader />}
    </>
  );
};
